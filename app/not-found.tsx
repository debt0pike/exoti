export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ marginBottom: '2rem' }}>页面未找到 / Page not found</p>
      <a href="/zh" style={{ color: '#6366f1', textDecoration: 'underline' }}>
        返回首页 / Go Home
      </a>
    </div>
  );
}
