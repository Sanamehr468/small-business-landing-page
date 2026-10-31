import './globals.css';

export const metadata = {
  title: 'GreenLeaf Cafe — Fresh Coffee & Bakery',
  description: 'A small local cafe and bakery. Fresh coffee, homemade bakery, and catering for your neighbourhood.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
