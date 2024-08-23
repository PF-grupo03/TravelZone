import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../users/user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService) {}

    @ApiOperation({ summary: 'Obtener información de autenticación', description: 'Obtiene información general sobre la autenticación.' })    
    @Get()
    getAuth() {
        return this.authService.getAuth();
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googlelogin() {

    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async callback(@Req() req, @Res() res) {
        // console.log(req.user);
        
        const {user} = req;

        if (!user) {
            return res.status(400).send('No se pudo autenticar el usuario');
        }

        res.setHeader('Authorization', `Bearer ${user.token}`);
        res.json(user)
        // const jwt = await this.authService.signIn(req.user.email, req.user.password);
        // res.set('authorization', jwt.token)
        // res.json(req.user);
    }

    @Get('test')
    @UseGuards(AuthGuard('jwt'))
    async test(@Res() res) {
        res.json('success');
    }



    @ApiOperation({ summary: 'Registrar usuario', description: 'Registra un nuevo usuario en el sistema.' })
    @Post('signup')
    signUp(@Body() user: CreateUserDto) {
        return this.authService.signUp(user);
    }

    @ApiOperation({ summary: 'Iniciar sesión', description: 'Permite a un usuario iniciar sesión en el sistema.' })
    @Post('signin')
    signIn(@Body() credential: LoginUserDto) {
        const { email, password } = credential;
        return this.authService.signIn(email, password);
    }

}
