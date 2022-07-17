import { User } from '@prisma/client';
import { DefaultUser } from 'next-auth';

export interface PlantsViewProps {
  user: User & DefaultUser;
}

const PlantsView: React.FC<PlantsViewProps> = ({ user }) => {
  return (
    
  );
};

export default PlantsView;
