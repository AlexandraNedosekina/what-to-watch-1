import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { resetMainScreen } from '../../store/action';
import PreviewPlayer from '../preview-player/preview-player';

type FilmCardProps = {
  title: string,
  image: string,
  id: number,
  previewVideo: string,
  isPointed: boolean,
  onChangePointedFilm: (id: number) => void
}
function FilmCard(props: FilmCardProps): JSX.Element {
  const {id, title, image, previewVideo, isPointed, onChangePointedFilm} = props;
  const dispatch = useAppDispatch();
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onChangePointedFilm(id)}
      onMouseLeave={() => onChangePointedFilm(NaN)}
    >
      <div className="small-film-card__image">
        {
          isPointed ? <PreviewPlayer image={image} previewVideo={previewVideo} />
            : <img src={image} alt={title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}/${id}`}
          onClick={() => (
            dispatch(resetMainScreen()))}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}
export default FilmCard;
