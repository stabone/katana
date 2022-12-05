import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it.skip('/cards (GET)', () => {
    return request(app.getHttpServer())
      .post('/cards')
      .expect(201)
      .expect({
        deckId: 'a',
        type: 'FULL',
        shuffled: false,
        remaining: 52
      });
  });
});
