export interface IDocument {
  titre: string;
  type: 'PDF' | 'IMG' | 'PPT' | 'NOICON';
  date?: string;
  blob?: string;
}
