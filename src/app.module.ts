import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { User } from './user/entities/user.entity';
import { Role } from './role/entities/role.entity';
import { City } from './city/entities/city.entity'
import { State } from './state/entities/state.entity'
import { Truck } from './truck/entities/truck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AuthModule } from './auth/auth.module';
import { TruckModule } from './truck/truck.module';
import { LoadModule } from './load/load.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    UserModule,
    RoleModule,
    StateModule,
    CityModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 54323,
      username: 'root',
      password: 'SuperPass',
      database: 'postgres',
      entities: [User, Role, City, State, Truck],
      synchronize: true
    }),
    TruckModule,
    LoadModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
