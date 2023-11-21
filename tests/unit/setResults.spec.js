import { shallowMount } from '@vue/test-utils';
import Weatherapp from '@/components/Weatherapp.vue';

describe('Weatherapp', () => {
  it('should update the weather data correctly', () => {
    // Create a shallow mount of the component
    const wrapper = shallowMount(Weatherapp);

    // Set the initial value for the weather data
    wrapper.setData({ weather: {} });

    // Call the setResults method with mock data
    const mockResults = { temp: 75, description: 'Sunny' };
    wrapper.vm.setResults(mockResults);

    // Check if the weather data has been updated correctly
    expect(wrapper.vm.weather).toEqual(mockResults);
  });
});