import favorite from '../../types/favorite';
import Logo from '../../components/logo/logo';
import DevFilmCard from '../dev-film/dev-film';
import UserBlock from '../../components/user-block/user-block';

type MyListProps = {
  myList: favorite
};

function MyList({myList}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo lightMode={false} />

        <h1 className="page-title user-page__title">
          My list<span className="user-page__film-count">{myList.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myList.map((film) => <DevFilmCard key={film.id} title={film.name} image={film.previewImage}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <Logo lightMode={false} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default MyList;
