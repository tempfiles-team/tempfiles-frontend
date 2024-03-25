import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function ApiPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>backend swagger ui로 이동</h1>
      <Link
        to={import.meta.env.VITE_APP_BACKEND_BASEURL + '/swagger/index.html'}
        target="_blank"
        className={cn(buttonVariants())}
      >
        {import.meta.env.VITE_APP_BACKEND_BASEURL + '/swagger/index.html'}
      </Link>
    </div>
  );
}
