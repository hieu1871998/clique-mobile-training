import { SafeAreaView } from 'react-native'
import { AppNavigator } from 'containers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <AppNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default App
