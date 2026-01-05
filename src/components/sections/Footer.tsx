export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} Juno Love. All rights reserved.</p>
      </div>
    </footer>
  );
}
