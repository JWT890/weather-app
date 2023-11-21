import { shallowMount } from '@vue/test-utils';
import WeatherApp from '@/components/WeatherApp.vue';

describe('WeatherApp', () => {
  it('should build the date string correctly', () => {
    const wrapper = shallowMount(WeatherApp);

    // Stub the current date to a fixed value
    const mockDate = new Date('2022-01-01T12:00:00Z');
    global.Date = jest.fn(() => mockDate);

    // Call the dateBuilder method
    const result = wrapper.vm.dateBuilder();

    // Assert the expected result
    expect(result).toBe('Saturday 1 January 2022');

    // Restore the original Date object
    global.Date = Date;
  });
});