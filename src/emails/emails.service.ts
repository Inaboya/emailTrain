import { Injectable } from '@nestjs/common';
import { BulkEmailsDto } from './dto';

@Injectable()
export class EmailsService {
    async sendBulkEmails(payload: BulkEmailsDto) {
        try {
            
        } catch (error) {
            throw error
        }
    }
}
