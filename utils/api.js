import { fetch, post } from '@/utils/axios';

export const _login = phoneNumber => fetch('/api/v1?phoneNumber=', phoneNumber);
