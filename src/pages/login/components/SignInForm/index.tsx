import React from 'react';
import { Button } from '../../../../components/UI/Button';
import InputForm from '../../../../components/UI/Input/InputForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { MdEmail, MdKey } from 'react-icons/md';
import InputPasswordForm from '../../../../components/UI/Input/InputPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../schemas/login-schema';
import { ISignIn } from '../../../../models/user-model';
import { useLogin } from '../../hooks/useLogin';

const SignInForm: React.FC = () => {
  const {
    mutation: { isPending },
    login,
  } = useLogin();
  const methods = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ISignIn> = (data) => login(data);

  return (
    <div className="absolute right-0 bottom-1/6 left-0 container px-4 sm:mx-auto">
      <div className="flex flex-wrap">
        <div className="mx-auto mt-0 w-full max-w-full shrink-0 px-3 md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className="shadow-soft-xl relative z-0 flex min-w-0 flex-col rounded-2xl border-0 bg-white bg-clip-border break-words">
            <div className="mb-0 rounded-t-2xl border-b-0 bg-white p-6 text-center">
              <h5 className="text-2xl font-medium">Login</h5>
            </div>
            <div className="flex-auto p-6 pt-0">
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  role="form"
                  method="post"
                >
                  <InputForm
                    placeholder="Email"
                    icon={<MdEmail />}
                    type="email"
                    name="email"
                    id="email-in"
                  />
                  <InputPasswordForm
                    placeholder="password"
                    icon={<MdKey />}
                    name="password"
                    id="password-in"
                  />
                  <div className="mt-2">
                    <Button
                      disabled={isPending}
                      fullWidth
                      variant="black"
                      type="submit"
                    >
                      {isPending ? 'Loading' : 'Sign In'}
                    </Button>
                  </div>
                  {/* <p className="mt-4 mb-0 text-sm leading-normal">
                    Already have an account?{' '}
                    <a href="/signin" className="font-bold text-slate-700">
                      Sign in
                    </a>
                  </p> */}
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
