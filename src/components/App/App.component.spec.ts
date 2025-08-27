import { AppComponent, Environment } from './App.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
    // Prevent actual fetch
    spyOn(component, 'fetchDiagnostics').and.stub();
  });

  it('environmentName returns correct string', () => {
    component.environment = Environment.Public;
    expect(component.environmentName).toBe('Public Cloud');
    component.environment = Environment.Fairfax;
    expect(component.environmentName).toBe('Fairfax');
    component.environment = Environment.Mooncake;
    expect(component.environmentName).toBe('Mooncake');
  });

  it('setEnvironment updates environment and resets extension', async () => {
    component.extension = { extensionName: 'foo' };
    await component.setEnvironment(Environment.Fairfax);
    expect(component.environment).toBe(Environment.Fairfax);
    expect(component.extension).toBeUndefined();
  });

  it('showPaasServerless reflects diagnostics state', () => {
    component.diagnostics = {
      extensions: {
        paasserverless: { extensionName: 'paasserverless' },
      },
      buildInfo: {},
      serverInfo: {},
    };
    expect(component.showPaasServerless).toBeTrue();

    component.diagnostics = {
      extensions: {
        paasserverless: { lastError: { errorMessage: 'err', time: 'now' } },
      },
      buildInfo: {},
      serverInfo: {},
    };
    expect(component.showPaasServerless).toBeFalse();
  });

  it('handleLinkClick sets extension if valid', () => {
    component.diagnostics = {
      extensions: {
        foo: { extensionName: 'foo' },
        bar: { lastError: { errorMessage: 'err', time: 'now' } },
      },
      buildInfo: {},
      serverInfo: {},
    };
    component.handleLinkClick({ key: 'foo', name: 'foo', url: '' });
    expect(component.extension).toEqual({ extensionName: 'foo' });

    component.handleLinkClick({ key: 'bar', name: 'bar', url: '' });
    expect(component.extension).toEqual({ extensionName: 'foo' }); // unchanged
  });

  it('selectExtension sets extension if valid', () => {
    component.diagnostics = {
      extensions: {
        foo: { extensionName: 'foo' },
        bar: { lastError: { errorMessage: 'err', time: 'now' } },
      },
      buildInfo: {},
      serverInfo: {},
    };
    component.selectExtension('foo');
    expect(component.extension).toEqual({ extensionName: 'foo' });

    component.selectExtension('bar');
    expect(component.extension).toEqual({ extensionName: 'foo' }); // unchanged
  });
});
