import slugify from 'slugify';

export default function createSlug(text: string, fallback: string): string {
  if (!text) return fallback;

  const slug = slugify(text, {
    lower: true,
    strict: true,
    locale: 'zh-CN', // 支持中文
    remove: /[*+~.()'"!:@]/g
  });

  return slug || fallback; // 如果生成的 slug 为空，使用 fallback
}
