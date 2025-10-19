export interface ProfileInfoCard {
  label: string;
  details: string;
  icon: string;
  info?: string;
}

export interface ProfileInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  photo: string;
  infoCard: ProfileInfoCard[];
}

