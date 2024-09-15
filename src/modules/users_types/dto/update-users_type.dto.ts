import { PartialType } from '@nestjs/swagger';
import { CreateUsersTypeDto } from './create-users_type.dto';

export class UpdateUsersTypeDto extends PartialType(CreateUsersTypeDto) {}
