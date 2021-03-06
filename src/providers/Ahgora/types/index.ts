export interface AhgoraCompanyJustification {
  read_write_attach: boolean;
  add_absence: boolean;
  add_punch: boolean;
}

export interface AhgoraCompany {
  empresa: string;
  nome: string;
  inicia_dia: string;
  inicia_mes_anterior: boolean;
  justifications_enabled: boolean;
  justification: Partial<AhgoraCompanyJustification>;
  notificacoes_enabled: boolean;
}

export interface AhgoraEmployee {
  nome: string;
  departamento: string;
  cargo: string;
  matricula: string;
  dt_admissao: string; // dt = date
  faceid_filename: string;
}

export interface AhgoraMonthTotal {
  tipo: string; // Label
  valor: string; // Hours (HHmm)
  em_dia: boolean;
}

export interface AhgoraDayTotal {
  tipo: string; // Label
  valor: string; // Hours (HHmm)
}

export interface AhgoraDayMarkLocation {
  timestamp_loc: number;
  longitude: number;
  latitude: number;
  accuracy: number;
  provider: string; // GPS
}

export interface AhgoraDayMark {
  hora: string; // (HHmm)
  tipo: string;
  offline: boolean;
  equipamento: string;
  location: AhgoraDayMarkLocation;
  id_photo: string;
}

export interface AhgoraPunchJustification {
  _id: string,
  empresa: string;
  matricula: string;
  data_batida: string;
  informacao: string;
  type: string;
  horario_da_justificativa: any;
  funcionario_id: any;
  addPunch: {
    punch: string; // HH:mm
    TRATAMENTO_DIA_BATIDA: any | null;
  },
  approved: boolean,
  confirmado: {
    texto: string;
    usuario: string // email
    data: any
  },
  attachments: any[]
}

export interface AhgoraDay {
  resultado: AhgoraDayTotal[];
  batidas: AhgoraDayMark[];
  status: Array<string>;
  HORAS_CONTRATUAIS: Array<string>;
  justificativa: AhgoraPunchJustification[];
}

export interface AhgoraMonthResume {
  empresa: Partial<AhgoraCompany>;
  funcionario: Partial<AhgoraEmployee>;
  resultado: Array<Partial<AhgoraMonthTotal>>;
  dias: Record<string, AhgoraDay>;
  [prop: string]: any;
}
