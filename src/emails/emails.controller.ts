import { Body, Controller, Post } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { BulkEmailsDto } from './dto';

@Controller('emails')
export class EmailsController {
    constructor(private readonly emailService: EmailsService){}
    @Post()
    async sendBulkEmails (@Body() payload: BulkEmailsDto) {
        return await this.emailService.sendBulkEmails(payload)
    }

}
