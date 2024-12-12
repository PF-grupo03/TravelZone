import { Injectable } from "@nestjs/common";
import { PassportStrategy} from '@nestjs/passport';
import {Strategy, VerifyCallback} from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_SECRET } from "src/config/env.config";
import { AuthService } from "./auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService) {
        super({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile']
        })
    }

    async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        try {
            console.log('Profile:', profile);
            
            
            const { emails, name, photos } = profile;
    
            if(!emails || !name) {
                return done(new Error('No se pudo obtener la informacion de perfil'), false)
            }
    
            const email = emails[0].value;
            const profileImage = photos && photos.length > 0 ? photos[0].value : 'URL_DE_IMAGEN_DEFAULT';
            
                // Aquí puedes extraer más datos del perfil si es necesario
            const user = await this.authService.findUserByEmail(email);
    
            if(!user) {
                return done(new Error('Usuario no encontrado'), false)
            }
    
            const token = await this.authService.generateJwt(user);
            console.log('Token:', token);
            
            done(null,{...user, token, profileImage});
                
        } catch (error) {
            console.error('Error en la validación de GoogleStrategy:', error);
            done(error, false);
        }
    };
    
}