import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import utils from '../utils';

// import jwtDecode from 'jwt-decode';

// interface TokenPayload {
//   role: string;
//   [key: string]: any;
// }

// export const getRoleFromToken = (token: string): string | null => {
//   try {
//     const decoded = jwtDecode<TokenPayload>(token);
//     return decoded?.role || null;
//   } catch (err) {
//     console.error('Invalid token', err);
//     return null;
//   }
// };


interface RoleGuardProps {
  allowedRoles: string[];
  children: ReactNode;
  fallback?: ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ allowedRoles, children, fallback }) => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);
  const userRole = getRoleFromToken(accessToken || '');

  if (utils.isRoleAllowed(userRole, allowedRoles)) {
    return <>{children}</>;
  }

  return fallback ? (
    <>{fallback}</>
  ) : (
    <View style={{ padding: 20 }}>
      <Text style={{ color: 'red', fontWeight: '500' }}>Access denied</Text>
    </View>
  );
};

export default RoleGuard;
