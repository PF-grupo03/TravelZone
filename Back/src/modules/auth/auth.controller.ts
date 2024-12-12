import { BadRequestException, Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../users/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService) {}

    @Get()
    @ApiOperation({ summary: 'Get auth', description: 'Get auth' })
    @ApiResponse({ status: 200, description: 'Auth retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Auth not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    getAuth() {
        return this.authService.getAuth();
    }

    @Get('google')
    @ApiOperation({ summary: 'Get google auth', description: 'Get google auth' })
    @ApiResponse({ status: 200, description: 'Google auth retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Google auth not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(AuthGuard('google'))
    async googlelogin() {

    }

    @Get('google/callback')
    @ApiOperation({ summary: 'Get google callback', description: 'Get google callback' })
    @ApiResponse({ status: 200, description: 'Google callback retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Google callback not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(AuthGuard('google'))
    
    async callback(@Req() req, @Res() res) {
        const { user } = req;
    
        if (!user) {
            return res.status(400).send('No se pudo autenticar el usuario');
        }
    
        if (user.message === 'Usuario no encontrado') {
            return res.redirect('/auth/signup');
        }
    
        res.setHeader('Authorization', `Bearer ${user.token}`);
        res.json(user);
    }
    

    @Get('test')
    @ApiOperation({ summary: 'Get test', description: 'Get test' })
    @ApiResponse({ status: 200, description: 'Test retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Test not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(AuthGuard('jwt'))
    async test(@Res() res) {
        res.json('success');
    }



    @Post('signup')
    @ApiOperation({ summary: 'signup', description: 'signup' })
    @ApiResponse({ status: 200, description: 'signup retrieved successfully' })
    @ApiResponse({ status: 404, description: 'signup not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    signUp(@Body() user: CreateUserDto) {
        return this.authService.signUp(user);
    }

    @Post('signin')
    @ApiOperation({ summary: 'signin', description: 'signin' })
    @ApiResponse({ status: 200, description: 'signin retrieved successfully' })
    @ApiResponse({ status: 404, description: 'signin not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    signIn(@Body() credential: LoginUserDto) {
        const { email, password } = credential;
        return this.authService.signIn(email, password);
    }

}
