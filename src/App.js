import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as LinkTo } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './images/logo.png';
import { Link as LinkInto, animationScroll as scroll } from 'react-scroll';
import post1 from './markdowns/blog-post.1.md';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PublicIcon from '@material-ui/icons/Public';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        IntelligenCell
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  conteudoSobre: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
    padding: theme.spacing(6, 0),
  },
  root: {
    minHeight: '100vh',
  },
  fixedHeightPaper: {
    height: 150,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  iconClass: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary
  },
  cardTitle: {
    marginBottom: theme.spacing(2)
  },
  texto: {
    textAlign: 'justify'
  }
}));

const sections = [
  'Página principal',
  'Sobre'
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const posts = [post1];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <LinkTo to="#">
            <img src={logo} alt="logo" width="250em" align="center" />
          </LinkTo>
          <LinkTo to="/free/" style={{ textDecoration: 'none' }}><Button size="small">
            Análise gratuita
          </Button></LinkTo>
          <LinkInto to="section2" smooth={true} offset={-70} duration={1000}>
            <Button size="small">Sobre</Button>
          </LinkInto>
          <LinkTo to="/dashboard/" style={{ textDecoration: 'none' }}><Button variant="outlined" size="small">
            Entrar
          </Button></LinkTo>
        </Toolbar>
        {/*<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>*/}
        <main>
          <BrowserRouter>
            <Paper className={classes.mainFeaturedPost}>
              {/* Increase the priority of the hero background image */}
              {
                <img
                  style={{ display: 'none' }}
                  src="https://source.unsplash.com/user/erondu"
                  alt="background"
                />
              }
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      Classificação Celular simplificada
                  </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Analise suas amostras com Redes Neurais pré-treinadas ou treine a sua própria
                  </Typography>
                    <LinkTo to="/free/" style={{ textDecoration: 'none' }}><Link variant="subtitle1">
                      Teste gratuito
                    </Link>
                    </LinkTo>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={classes.fixedHeightPaper}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    <ViewComfyIcon className={classes.iconClass} />
                    Treine
                </Typography>
                  <Typography>
                    Treine sua própria Rede Neural.
                    Assim, ela se adequará ao seu problema.
                </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={classes.fixedHeightPaper}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    <AccountTreeIcon className={classes.iconClass} />
                    Classifique
                </Typography>
                  <Typography>
                    Utilize a Rede Neural para classificar as células da sua imagem.
                </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={classes.fixedHeightPaper}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    <PublicIcon className={classes.iconClass} />
                    Explore
                </Typography>
                  <Typography>
                    Utilize Redes Neurais pré-treinadas pela comunidade ou por nossa equipe.
                </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  Sobre
              </Typography>
                <Typography gutterBottom className={classes.texto}>
                  Intelligencell é uma opção simples para que profissionais da área biomédica possam realizar
                    análises de imagens de microscopia por meio de uma inteligência artificial que classificará um
                    dataset de células/substâncias.
              </Typography>
                <Typography gutterBottom className={classes.texto}>
                  Este sistema contém uma versão gratuita, que realiza uma análise simples e entrega
                     o resultado com poucos detalhes. Já a versão paga permite que o usuário realize um número ilimitado
                     de analises que serão salvas em sua conta. Existirá também nesta versão a possibilidade de salvar
                     os seus datasets, consultar datasets públicos e realizar análises que retornarão mais detalhes
                     sobre os objetos processados nas imagens, incluindo gráficos e estatísticas.
              </Typography>
                <Typography gutterBottom className={classes.texto}>
                  Este sistema contém uma versão gratuita, que realiza uma análise simples e entrega
                    o resultado com poucos detalhes. Já a versão paga permite que o usuário realize um número ilimitado
                    de analises que serão salvas em sua conta.
              </Typography>
                <Typography gutterBottom className={classes.texto}>
                  Existirá também nesta versão a possibilidade de salvar
                    os seus datasets, consultar datasets públicos e realizar análises que retornarão mais detalhes
                    sobre os objetos processados nas imagens, incluindo gráficos e estatísticas.
              </Typography>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    Computação na Nuvem <FilterDramaIcon />
                  </Typography>
                  <Typography>
                    Com o Intelligencell, não é necessária a instalação de programas ou de equipamentos. Cuidamos de tudo isso para você.
                  </Typography>
                </Paper>
              </Grid>
              {/* End sidebar */}
            </Grid>
            {/* <Switch>
            <Route path="/" exact={true} component={Inicio} />
          </Switch> */}
          </ BrowserRouter>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            IntelligenCell
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Universidade Vila Velha
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </div>
  );
}