import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { type Profile, profileReducer } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { ProfileForm } from '../..';

const profile: Profile = {
   id: '1',
   first: 'Ruslan',
   lastname: 'Canadian',
   age: 33,
   currency: Currency.USD,
   country: Country.Canada,
   city: 'Calgary',
   username: 'ssenick',
   avatar: 'avatar-path',
};
const options = {
   initialState: {
      profile: {
         readonly: true,
         data: profile,
         form: profile,
      },
      user: {
         authData: {
            id: '1',
            avatar: 'avatar-path',
            username: 'ssenick',
         },
      },
   },
   asyncReducers: {
      profile: profileReducer,
   },
};
describe('ProfileForm.test', () => {
   test('Все компоненты есть в документе', async () => {
      componentRender(<ProfileForm />, options);
      expect(screen.getByTestId('ProfileForm.EditButton')).toBeInTheDocument();
      await userEvent.click(screen.getByTestId('ProfileForm.EditButton'));

      expect(screen.getByTestId('ProfileForm.CancelButton')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.NameInput')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.LastNameInput')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.AgeInput')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.UsernameInput')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.AvatarInput')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileForm.SaveButton')).toBeInTheDocument();
   });

   test('read only', async () => {
      componentRender(<ProfileForm />, options);
      await userEvent.click(screen.getByTestId('ProfileForm.EditButton'));
      expect(screen.getByTestId('ProfileForm.CancelButton')).toBeInTheDocument();
   });

   test('Внесение изминений и при отмене вернуть старые значения', async () => {
      componentRender(<ProfileForm />, options);
      await userEvent.click(screen.getByTestId('ProfileForm.EditButton'));

      await userEvent.clear(screen.getByTestId('ProfileCard.NameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.AgeInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.UsernameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.AvatarInput'));

      await userEvent.type(screen.getByTestId('ProfileCard.NameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.AgeInput'), '22');
      await userEvent.type(screen.getByTestId('ProfileCard.UsernameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.AvatarInput'), 'user');

      await userEvent.click(screen.getByTestId('ProfileForm.CancelButton'));

      expect(screen.getByTestId('ProfileCard.NameInput')).toHaveValue('Ruslan');
      expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('Canadian');
      expect(screen.getByTestId('ProfileCard.AgeInput')).toHaveValue('33');
      expect(screen.getByTestId('ProfileCard.UsernameInput')).toHaveValue('ssenick');
      expect(screen.getByTestId('ProfileCard.AvatarInput')).toHaveValue('avatar-path');
   });

   test('Появление ошибок при пустых значениях', async () => {
      componentRender(<ProfileForm />, options);
      await userEvent.click(screen.getByTestId('ProfileForm.EditButton'));

      await userEvent.clear(screen.getByTestId('ProfileCard.NameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.AgeInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.UsernameInput'));

      await userEvent.click(screen.getByTestId('ProfileForm.SaveButton'));

      expect(screen.getByTestId('ProfileCard.NameInput.Error.Paragraph')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.LastNameInput.Error.Paragraph')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.AgeInput.Error.Paragraph')).toBeInTheDocument();
      expect(screen.getByTestId('ProfileCard.UsernameInput.Error.Paragraph')).toBeInTheDocument();
   });

   test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
      componentRender(<ProfileForm />, options);
      const mockPutReq = jest.spyOn($api, 'put');

      await userEvent.click(screen.getByTestId('ProfileForm.EditButton'));

      await userEvent.clear(screen.getByTestId('ProfileCard.NameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.AgeInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.UsernameInput'));
      await userEvent.clear(screen.getByTestId('ProfileCard.AvatarInput'));

      await userEvent.type(screen.getByTestId('ProfileCard.NameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.AgeInput'), '22');
      await userEvent.type(screen.getByTestId('ProfileCard.UsernameInput'), 'user');
      await userEvent.type(screen.getByTestId('ProfileCard.AvatarInput'), 'user');

      await userEvent.click(screen.getByTestId('ProfileForm.SaveButton'));

      expect(mockPutReq).toHaveBeenCalled();
   });
});
