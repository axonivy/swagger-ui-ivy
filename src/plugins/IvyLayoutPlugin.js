import IvyLayout from '../components/IvyLayout';
import TopBar from '../components/TopBar';
import Logo from '../components/Logo';
import ServersContainer from '../components/ServersContainer';

const IvyLayoutPlugin = () => ({
  components: {
    IvyLayout,
    Topbar: TopBar,
    ServersContainer,
    Logo
  }
});

export default IvyLayoutPlugin;
