import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
    Res,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { response } from 'express';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    // @Post('/create')
    // create(@Body() createAccountDto: CreateAccountDto) {
    //     return this.accountService.create(createAccountDto);
    // }

    @Get('/')
    findAll(@Req() request: Request, @Res() response: Response) {
        return this.accountService.index(request, response);
    }

    @Post('/create')
    create(@Req() request: Request, @Res() response: Response) {
        return this.accountService.create(request, response);
    }

    @Post('/deactive')
    deactive(@Req() request: Request, @Res() response: Response) {
        return this.accountService.deactive(request, response);
    }

    @Post('/active')
    active(@Req() request: Request, @Res() response: Response) {
        return this.accountService.active(request, response);
    }

    @Post('/editRole')
    editRole(@Req() request: Request, @Res() response: Response) {
        return this.accountService.editRole(request, response);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //   return this.accountService.findOne(+id);
    // }
    //
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    //   return this.accountService.update(+id, updateAccountDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return this.accountService.remove(+id);
    // }
}
