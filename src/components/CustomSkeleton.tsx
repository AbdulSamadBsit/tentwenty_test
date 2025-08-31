import React from 'react';
import {AutoSkeletonView} from 'react-native-auto-skeleton';

interface CustomSkeletonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
  children,
  isLoading,
}) => {
  return <AutoSkeletonView isLoading={isLoading}>{children}</AutoSkeletonView>;
};

export default CustomSkeleton;
