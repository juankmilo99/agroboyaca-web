export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AgroNexo. Hecho con ❤️ en Boyacá.</p>
          <p className="text-xs">Developed by JxcrDev. Contact me: <a href="https://portfolio-juan-r.netlify.app/" target="_blank" rel="noopener noreferrer">🌐</a></p>
        </div>
      </div>
    </footer>
  );
}

