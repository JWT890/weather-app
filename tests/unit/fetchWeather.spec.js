import { shallowMount } from '@vue/test-utils';
import Weatherapp from '@/components/Weatherapp.vue';

describe('Weatherapp', () => {
  it('should call fetch with the correct URL when Enter key is pressed', () => {
    const wrapper = shallowMount(Weatherapp);
    wrapper.setData({ query: 'London' });
    const mockResponse = { weather: 'sunny' };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const event = { key: 'Enter' };
    wrapper.vm.fetchWeather(event);

    expect(global.fetch).toBeCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=252d2dcfff030bddf06d281b1189d3f3`
    );
  });
});