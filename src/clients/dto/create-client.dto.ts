import * as Joi from 'joi';

export class CreateClientDto {
  readonly firstName: string;
  readonly email: string;
  password: string;
}

export const CreateClientSchema = Joi.object({
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required().min(6),
});
