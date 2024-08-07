import { IsNumber, IsUrl } from 'class-validator';

export class CreateAudioDto {
  @IsNumber()
  surah_id: number;

  @IsNumber()
  tilawa_id: number;

  @IsUrl()
  url: string;
}
