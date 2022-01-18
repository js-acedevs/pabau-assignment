export interface SpaceXLaunchCardProps {
  id: string;
  missionId?: string | null;
  missionName: string;
  launchSuccess: boolean;
  image: string | null;
  details: string;
}
