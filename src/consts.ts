
// Dados globais do site
export const SITE_TITLE = 'Patas em Casa';
export const SITE_DESCRIPTION = 'Dicas práticas de saúde, alimentação, comportamento e produtos para cães e gatos. Para famílias que amam seus pets.';
export const SITE_EMAIL = 'contato.patasemcasa@gmail.com';
export const PETZ_URL = 'https://petz.com.br/parceiro/meuspetslife';

// Categorias (silos)
export const CATEGORIES = [
  { name: 'Cães', slug: 'caes' },
  { name: 'Gatos', slug: 'gatos' },
  { name: 'Saúde Pet', slug: 'saude-pet' },
  { name: 'Alimentação', slug: 'alimentacao' },
  { name: 'Produtos', slug: 'produtos' },
  { name: 'Custos e Economia', slug: 'custos-e-economia' },
] as const;

// Função para converter nome de tag em slug de categoria
export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}