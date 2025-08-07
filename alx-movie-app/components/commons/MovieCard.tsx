cat > components/commons/MovieCard.tsx <<'EOF'
import React from 'react';
import Button from '../layouts/Button';

interface Movie {
  id?: string | number;
  title: string;
  year?: string | number;
  poster?: string;
  overview?: string;
}

type Props = {
  movie: Movie;
  onClick?: (movie: Movie) => void;
};

const MovieCard: React.FC<Props> = ({ movie, onClick }) => (
  <article className="max-w-xs border rounded overflow-hidden shadow-sm">
    {movie.poster ? (
      <img src={movie.poster} alt={`${movie.title} poster`} className="w-full h-48 object-cover" />
    ) : (
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">No image</div>
    )}
    <div className="p-4">
      <h3 className="font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.year}</p>
      {movie.overview && <p className="mt-2 text-sm">{movie.overview}</p>}
      <div className="mt-4">
        <Button onClick={() => onClick?.(movie)}>Details</Button>
      </div>
    </div>
  </article>
);

export default MovieCard;
EOF
