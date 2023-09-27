//copied from: swagger-api/swagger-ui/src/core/plugins/oas3/components/servers-container.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default class ServersContainer extends React.Component {
  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired
  };

  render() {
    const { specSelectors, oas3Selectors } = this.props;

    const servers = specSelectors.servers();

    return servers && servers.size ? (
      <div>
        <div className='computed-url'>
          Server Url:
          <code> {oas3Selectors.serverEffectiveValue(servers.first()?.get('url'))}</code>
        </div>
      </div>
    ) : null;
  }
}
