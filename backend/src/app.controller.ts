import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService, VerificationStatus } from './app.service';

interface EnrollmentBody {
  alias: string;
  email: string;
  country: string;
  eventId: string;
  consents: {
    terms: boolean;
    privacy: boolean;
    operationalComms: boolean;
  };
}

interface AchievementBody {
  category: string;
  level: string;
  verificationStatus: VerificationStatus;
  evidenceBonus?: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('config')
  getConfig() {
    return this.appService.getConfig();
  }

  @Post('enrollments')
  createEnrollment(@Body() body: EnrollmentBody) {
    return this.appService.createEnrollment(body);
  }

  @Post('achievements')
  createAchievement(@Body() body: AchievementBody) {
    return this.appService.createAchievement(body);
  }

  @Get('profile/:alias')
  getProfile(@Param('alias') alias: string) {
    return this.appService.getProfile(alias);
  }
}
