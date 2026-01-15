import { Injectable } from '@nestjs/common';

export type VerificationStatus = 'autodeclarado' | 'evidencia' | 'entidad';

interface EnrollmentRequest {
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

interface AchievementRequest {
  category: string;
  level: string;
  verificationStatus: VerificationStatus;
  evidenceBonus?: boolean;
}

@Injectable()
export class AppService {
  private enrollments: Array<EnrollmentRequest & { qrToken: string }> = [];
  private achievements: Array<AchievementRequest & { score: number }> = [];

  getConfig() {
    return {
      principles: [
        'Minimización de datos',
        'Consentimiento granular',
        'Verificabilidad',
        'Meritocracia y participación',
        'Transparencia y anti-fraude',
      ],
      privacyOptions: ['Privado', 'Solo comunidad', 'Público'],
      rankHierarchy: [
        { name: 'Recluta', min: 0, max: 99 },
        { name: 'Cadete', min: 100, max: 249 },
        { name: 'Explorador', min: 250, max: 499 },
        { name: 'Operador', min: 500, max: 899 },
        { name: 'Especialista', min: 900, max: 1399 },
        { name: 'Sargento', min: 1400, max: 1999 },
        { name: 'Teniente', min: 2000, max: 2799 },
        { name: 'Capitán', min: 2800, max: 3799 },
        { name: 'Comandante', min: 3800, max: null },
      ],
      scoreTable: {
        eventos: {
          asistencia: { points: 10, annualCap: 100 },
          participante: { points: 25, annualCap: 200 },
          staff: { points: 35, annualCap: 210 },
          mentor: { points: 40, annualCap: 240 },
          speaker: { points: 60, annualCap: 300 },
          podioTop3: { points: 150, annualCap: null },
          top10: { points: 80, annualCap: null },
        },
        comunidades: {
          miembroActivo: { points: 20, annualCap: 40 },
          organizador: { points: 60, annualCap: 120 },
          taller: { points: 50, annualCap: 200 },
        },
        certificaciones: {
          inicial: 80,
          intermedio: 160,
          avanzado: 300,
          experto: 450,
        },
        estudios: {
          cursoFormal: 20,
          diplomado: 150,
          tituloProfesional: 250,
          postgrado: 350,
        },
        plataformas: {
          basico: 50,
          intermedio: 120,
          avanzado: 250,
          elite: 400,
        },
        contribucion: {
          writeup: 30,
          oss: 60,
          hallazgo: 120,
        },
      },
      multipliers: {
        verificado: 1,
        autodeclarado: 0.5,
        evidenciaFuerteBonus: 0.1,
      },
    };
  }

  createEnrollment(payload: EnrollmentRequest) {
    const qrToken = `QR-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const enrollment = { ...payload, qrToken };
    this.enrollments.push(enrollment);
    return enrollment;
  }

  createAchievement(payload: AchievementRequest) {
    const basePoints = this.resolveBasePoints(payload.category, payload.level);
    const multiplier = payload.verificationStatus === 'autodeclarado' ? 0.5 : 1;
    const bonus = payload.evidenceBonus ? 0.1 : 0;
    const score = Math.round(basePoints * multiplier * (1 + bonus));
    const achievement = { ...payload, score };
    this.achievements.push(achievement);
    return achievement;
  }

  getProfile(alias: string) {
    return {
      alias,
      isPublic: true,
      showScore: true,
      showSocials: true,
      summary: 'Especialista en AppSec con foco en mentoring y participación comunitaria.',
      highlights: [
        { label: 'Eventos verificados', value: 6 },
        { label: 'Certificaciones', value: 3 },
        { label: 'Rank actual', value: 'Operador' },
      ],
      modules: [
        {
          name: 'Identidad pública',
          status: 'Verificado',
          data: {
            avatar: 'https://placehold.co/160x160',
            bio: 'Mentor en CTF y organizador de talleres de seguridad ofensiva.',
            specialties: ['AppSec', 'Red Team', 'CloudSec'],
          },
        },
        {
          name: 'Logros',
          status: 'Autodeclarado',
          data: {
            eventos: ['Speaker en CyberCon 2024', 'Mentor CTF regional'],
            certificaciones: ['eJPT (verificada)', 'PNPT (pendiente)'],
          },
        },
      ],
    };
  }

  private resolveBasePoints(category: string, level: string) {
    const table = this.getConfig().scoreTable;
    const categoryMap = table[category as keyof typeof table];
    if (!categoryMap) {
      return 0;
    }
    if (typeof categoryMap === 'object' && level in categoryMap) {
      const entry = categoryMap[level as keyof typeof categoryMap];
      if (typeof entry === 'number') {
        return entry;
      }
      if (typeof entry === 'object' && entry !== null) {
        return entry.points ?? 0;
      }
    }
    return 0;
  }
}
