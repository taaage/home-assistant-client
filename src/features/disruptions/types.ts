export type Disruption = {
  message_variants: {
    header: string;
    details: string;
    scope_alias: string;
    language: string;
  }[];
  scope: {
    lines: {
      id: number;
      designation: string;
      transport_mode: string;
    }[];
  };
};
