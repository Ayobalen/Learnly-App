import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { AuthService, UserService } from 'src/services';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [AuthService],
    }).compile();

    app = moduleFixture.createNestApplication();
    authService = moduleFixture.get<AuthService>(AuthService);
    await app.init();
  });

  afterAll(async () => {
    await authService.deleteUserByEmail('idrisrasheed200@gmail.com');
  });

  describe('/v1/auth/user (POST)', () => {
    it('should create a new user', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/user')
        .send({
          email: 'idrisrasheed20@gmail.com',
          password: 'AyobamI008@.',
          first_name: 'rasheed',
          last_name: 'idris',
          phone_number: '09135175430',
          country: 'Nigeria',
          state: 'Abuja',
          city: 'Abuja',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

      expect(response.status).toEqual('success');
      expect(response.body.message).toEqual('Account created successfully');
      expect(response.body.data.email).toEqual('idrisrasheed20@gmail.com');
      expect(response.body.data.password).toEqual('AyobamI008@.');
      expect(response.body.data.first_name).toEqual('rasheed');
      expect(response.body.data.last_name).toEqual('idris');
      expect(response.body.data.phone_number).toEqual('09135175430');
      expect(response.body.data.country).toEqual('Nigeria');
      expect(response.body.data.state).toEqual('Abuja');
      expect(response.body.data.city).toEqual('Abuja');
    });
  });

  describe('/v1/auth/user (POST)', () => {
    it('should create a new admin', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/admin')
        .send({
          email: 'idrisrasheed2@gmail.com',
          password: 'AyobamI008@.',
          first_name: 'rasheed',
          last_name: 'idris',
          phone_number: '09135175430',
          country: 'Nigeria',
          state: 'Abuja',
          city: 'Abuja',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

      expect(response.body.message).toEqual('Account created successfully');
      expect(response.body.status).toEqual('success');
      expect(response.body.data.email).toEqual('idrisrasheed2@gmail.com');
      expect(response.body.data.password).toEqual('AyobamI008@.');
      expect(response.body.data.first_name).toEqual('rasheed');
      expect(response.body.data.last_name).toEqual('idris');
      expect(response.body.data.phone_number).toEqual('09135175430');
      expect(response.body.data.country).toEqual('Nigeria');
      expect(response.body.data.state).toEqual('Abuja');
      expect(response.body.data.city).toEqual('Abuja');
    });
  });

  describe('/v1/auth/login (POST)', () => {
    it('should log in a user', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/login')
        .send({
          email: 'idrisrasheed20@gmail.com',
          password: 'AyobamI008@.',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

      expect(response.body.status).toEqual('success');
      expect(response.body.message).toEqual('Successfully logged in');
      expect(response.body.data.access_token).toHaveProperty('access_token');
      expect(response.body.data.refresh_token).toHaveProperty('refresh_token');
    });
  });

  describe('/v1/users/:id (PUT)', () => {
    it('should update a new user', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFzaGVlZDIwMDBAZ21haWwuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXIiOiIwOTc5MzQ0Njc4OSIsInVzZXIiOiI2NWQ4YzFhMzRmM2ExOTc3ODA5NjM5ZmUiLCJpc19yZWZyZXNoX3Rva2VuIjpmYWxzZSwiZXhwIjoxNzA5MzA5MDc0LCJpYXQiOjE3MDg3MDQyNzR9.WbSaLmrmMGU5NK2BYRvoc89dtb2CGSXl750kkFWSaas';
      const response = await request(app.getHttpServer())
        .put('/v1/users/65d8c17e4f3a1977809639f8')
        .send({
          country: 'Nigeria',
          state: 'Kwara',
          city: 'Ilorin',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toEqual('success');
      expect(response.body.message).toEqual('Account created successfully');
      expect(response.body.data.country).toEqual('Nigeria');
      expect(response.body.data.state).toEqual('Kwara');
      expect(response.body.data.city).toEqual('Ilorin');
    });
  });

  describe('/v1/users/:id (DELETE)', () => {
    it('should delete a user', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFzaGVlZDIwMDBAZ21haWwuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXIiOiIwOTc5MzQ0Njc4OSIsInVzZXIiOiI2NWQ4YzFhMzRmM2ExOTc3ODA5NjM5ZmUiLCJpc19yZWZyZXNoX3Rva2VuIjpmYWxzZSwiZXhwIjoxNzA5MzA5MDc0LCJpYXQiOjE3MDg3MDQyNzR9.WbSaLmrmMGU5NK2BYRvoc89dtb2CGSXl750kkFWSaas';

      const response = await request(app.getHttpServer())
        .delete('/v1/users/65d8c17e4f3a1977809639f8')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toEqual('success');
      expect(response.body.message).toEqual('User deleted successfully');
    });
  });

  describe('/v1/users/users (GET)', () => {
    it('should get all users', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFzaGVlZDIwMDBAZ21haWwuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXIiOiIwOTc5MzQ0Njc4OSIsInVzZXIiOiI2NWQ4YzFhMzRmM2ExOTc3ODA5NjM5ZmUiLCJpc19yZWZyZXNoX3Rva2VuIjpmYWxzZSwiZXhwIjoxNzA5MzA5MDc0LCJpYXQiOjE3MDg3MDQyNzR9.WbSaLmrmMGU5NK2BYRvoc89dtb2CGSXl750kkFWSaas';

      const response = await request(app.getHttpServer())
        .get('/v1/users/users')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toEqual('success');
      expect(response.body.message).toEqual('fetch users successfully');
      expect(response.body.data).toBeInstanceOf(Array);
    });
  });

  describe('/v1/users/:id (GET)', () => {
    it('should get one user', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFzaGVlZDIwMDBAZ21haWwuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJwaG9uZV9udW1iZXIiOiIwOTc5MzQ0Njc4OSIsInVzZXIiOiI2NWQ4YzFhMzRmM2ExOTc3ODA5NjM5ZmUiLCJpc19yZWZyZXNoX3Rva2VuIjpmYWxzZSwiZXhwIjoxNzA5MzA5MDc0LCJpYXQiOjE3MDg3MDQyNzR9.WbSaLmrmMGU5NK2BYRvoc89dtb2CGSXl750kkFWSaas';

      const response = await request(app.getHttpServer())
        .get('/v1/users/65da215c7fe550e37043ab33')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toEqual('success');
      expect(response.body.message).toEqual('User retrieved successfully');
      expect(response.body.data).toHaveProperty('_id');
      expect(response.body.data._id).toEqual('65da215c7fe550e37043ab33');
    });
  });

  describe('/v1/transaction/deposit (POST)', () => {
    it('should deposit money', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFhb2RqcnNoZWVkZDIwMEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJ1c2VyIiwicGhvbmVfbnVtYmVyIjoiMDk3OTM0NDY3ODkiLCJ1c2VyIjoiNjVkOTI0MTcxNmI1ZGQxZGJlY2Q4OWZiIiwiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsImV4cCI6MTcwOTMzNTE3MCwiaWF0IjoxNzA4NzMwMzcwfQ.yiIK8PO4MPCplp-EHYBmZm3L8gozRbjiiQObyjheQSA';

      const response = await request(app.getHttpServer())
        .post('/v1/transaction/deposit')
        .send({
          amount: 50,
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.body.status).toEqual('success');
      expect(response.body.message).toEqual('Money deposited successfully');
      expect(response.body.data.user).toEqual('65d9241716b5dd1dbecd89fb');
      expect(response.body.data.balance).toEqual(200);
      expect(response.body.data.transaction_type).toEqual('deposit');
      expect(response.body.data.transaction_status).toEqual('completed');
      expect(response.body.data.amount).toEqual(50);
    });
  });

  describe('/v1/transaction/withdrawal (POST)', () => {
    it('should withdraw money', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFhb2RqcnNoZWVkZDIwMEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJ1c2VyIiwicGhvbmVfbnVtYmVyIjoiMDk3OTM0NDY3ODkiLCJ1c2VyIjoiNjVkOTI0MTcxNmI1ZGQxZGJlY2Q4OWZiIiwiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsImV4cCI6MTcwOTMzNTE3MCwiaWF0IjoxNzA4NzMwMzcwfQ.yiIK8PO4MPCplp-EHYBmZm3L8gozRbjiiQObyjheQSA';

      const response = await request(app.getHttpServer())
        .post('/v1/transaction/withdrawal')
        .send({
          amount: 20,
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.body.status).toEqual('success');
      expect(response.body.message).toEqual('Money withdrawn successfully');
      expect(response.body.data.user).toEqual('65d9241716b5dd1dbecd89fb');
      expect(response.body.data.balance).toEqual(-20);
      expect(response.body.data.transaction_type).toEqual('withdrawal');
      expect(response.body.data.transaction_status).toEqual('completed');
      expect(response.body.data.amount).toEqual(20);
    });
  });

  describe('/v1/transaction/transfer (POST)', () => {
    it('should transfer money', async () => {
     
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFhb2RqcnNoZWVkZDIwMEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJ1c2VyIiwicGhvbmVfbnVtYmVyIjoiMDk3OTM0NDY3ODkiLCJ1c2VyIjoiNjVkOTI0MTcxNmI1ZGQxZGJlY2Q4OWZiIiwiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsImV4cCI6MTcwOTMzNTE3MCwiaWF0IjoxNzA4NzMwMzcwfQ.yiIK8PO4MPCplp-EHYBmZm3L8gozRbjiiQObyjheQSA';

      const response = await request(app.getHttpServer())
        .post('/v1/transaction/transfer')
        .send({
          amount: 10,
          transfer_to: '65d98ab773e59a0a46d081c0',
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

      expect(response.body.status).toEqual('success');
      expect(response.body.message).toEqual('Money transferred successfully');
      expect(response.body.data.message).toEqual('Money transferred successfully');
      expect(response.body.data.data.transaction.user).toEqual('65d9241716b5dd1dbecd89fb');
      expect(response.body.data.data.transaction.balance).toEqual(-10);
      expect(response.body.data.data.transaction.transfer_to).toEqual('65d98ab773e59a0a46d081c0');
      expect(response.body.data.data.transaction.transaction_type).toEqual('transfer');
      expect(response.body.data.data.transaction.transaction_status).toEqual('completed');
      expect(response.body.data.data.transaction.amount).toEqual(10);
      expect(response.body.data.data.senderUpdatedBalance).toEqual(170);
      expect(response.body.data.data.recipientUpdatedBalance).toEqual(40);
    });
  });

  describe('/v1/transaction/:user_id (GET)', () => {
    it('should get all user transactions', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzcmFhb2RqcnNoZWVkZDIwMEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJ1c2VyIiwicGhvbmVfbnVtYmVyIjoiMDk3OTM0NDY3ODkiLCJ1c2VyIjoiNjVkOTI0MTcxNmI1ZGQxZGJlY2Q4OWZiIiwiaXNfcmVmcmVzaF90b2tlbiI6ZmFsc2UsImV4cCI6MTcwOTMzNTE3MCwiaWF0IjoxNzA4NzMwMzcwfQ.yiIK8PO4MPCplp-EHYBmZm3L8gozRbjiiQObyjheQSA';

      const response = await request(app.getHttpServer())
        .get('/v1/transaction/65d9241716b5dd1dbecd89fb')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`); 

      expect(response.status).toEqual(200);
      expect(response.body.status).toEqual('sucess');
      expect(response.body.message).toEqual('All user transaction retrieved successfully');
      expect(response.body.data).toBeInstanceOf(Array);
    });
  });
});
