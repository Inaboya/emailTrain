import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class BulkEmailsDto {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  emailList: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
