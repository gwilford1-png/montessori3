import React from 'react';
import { Book } from '../types';
import { Book as BookIcon, ExternalLink, Star, Check, X } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const StarRating = ({ rating, count }: { rating: number, count: string }) => {
  return (
    <div className="flex items-center gap-1.5 text-[#9C6644] mb-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={12} 
            fill={star <= Math.round(rating) ? "currentColor" : "none"} 
            className={star <= Math.round(rating) ? "text-[#9C6644]" : "text-[#D8DED1]"}
          />
        ))}
      </div>
      <span className="text-[10px] font-bold text-[#2D2926]/60">
        {rating}/5 <span className="opacity-60 font-normal ml-0.5">({count})</span>
      </span>
    </div>
  );
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const hasValidImage = book.cover_image && (book.cover_image.startsWith('http') || book.cover_image.startsWith('https'));

  return (
    <div className="flex flex-col md:flex-row bg-white border border-[#D8DED1] rounded-xl overflow-hidden group">
       
       <div className="w-full md:w-44 shrink-0 bg-[#E5E9E1] flex items-center justify-center p-6 relative">
          {book.badge && (
             <span className="absolute top-3 left-3 z-10 bg-[#2D2926] text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md">
               {book.badge}
             </span>
          )}
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#2D2926]/5 blur-md transform translate-y-2 rounded-lg"></div>
            {hasValidImage ? (
               <img 
                 src={book.cover_image} 
                 alt={book.title}
                 className="relative w-24 h-auto object-cover rounded-md shadow-sm border border-[#D8DED1]"
               />
            ) : (
              <div className="relative w-24 h-32 bg-white rounded-md border border-[#D8DED1] flex flex-col items-center justify-center p-3 text-center">
                 <BookIcon size={24} className="text-[#2D2926]/20 mb-2" />
                 <span className="text-[8px] font-black text-[#2D2926]/40 uppercase tracking-wide">{book.title}</span>
              </div>
            )}
          </div>
       </div>

       <div className="flex-1 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#D8DED1]">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[8px] font-black text-[#9C6644] uppercase tracking-widest bg-[#9C6644]/5 border border-[#9C6644]/20 px-2 py-0.5 rounded-md">
                {book.category}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2D2926] leading-tight mb-1">
              {book.title}
            </h3>
            <p className="text-xs font-bold text-[#2D2926]/40 mb-3 font-sans italic">by {book.author}</p>
            
            {(book.rating && book.review_count) && (
              <StarRating rating={book.rating} count={book.review_count} />
            )}
            
            <p className="text-[#2D2926]/70 text-sm leading-relaxed mb-4 font-sans line-clamp-2">
              {book.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
               {book.pros && book.pros.length > 0 && (
                 <div>
                   <h5 className="text-[8px] font-black text-[#829173] uppercase tracking-[0.2em] mb-2">Highlights</h5>
                   <ul className="space-y-1">
                     {book.pros.slice(0, 2).map((pro, idx) => (
                       <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#2D2926]/60 leading-snug">
                         <Check size={12} className="text-[#829173] mt-0.5 shrink-0" strokeWidth={3} />
                         <span className="truncate">{pro}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
            </div>
          </div>
       </div>

       <div className="w-full md:w-48 shrink-0 flex flex-col items-center justify-center p-6 bg-[#E5E9E1]/40 border-t md:border-t-0 md:border-l border-[#D8DED1]">
          <a 
            href={book.amazon_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-white border border-[#D8DED1] text-[#2D2926] hover:bg-[#2D2926] hover:text-white rounded-md font-black text-[9px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
          >
            <span>Preview</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
       </div>
    </div>
  )
}
export default BookCard;
