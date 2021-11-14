import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { UserSchema } from './User.model';
import { UsersRepository } from './user.repository';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  providers: [UsersRepository, UsersService, AuthService],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
