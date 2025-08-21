#!/usr/bin/env python3
"""
Backend Test for RV Home Sol Interior Design Website
Since this is a frontend-only React application, this test focuses on:
1. Checking if the development server is running
2. Verifying static assets are accessible
3. Testing basic HTTP responses
"""

import requests
import sys
from datetime import datetime

class FrontendTester:
    def __init__(self, base_url="http://localhost:5173"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, test_func):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            success = test_func()
            if success:
                self.tests_passed += 1
                print(f"✅ Passed")
            else:
                print(f"❌ Failed")
            return success
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

    def test_server_running(self):
        """Test if the development server is running"""
        try:
            response = requests.get(self.base_url, timeout=5)
            return response.status_code == 200
        except:
            return False

    def test_html_content(self):
        """Test if HTML contains expected content"""
        try:
            response = requests.get(self.base_url, timeout=5)
            if response.status_code == 200:
                content = response.text
                return "RV Home Sol" in content and "root" in content
            return False
        except:
            return False

    def test_static_assets(self):
        """Test if static assets are accessible"""
        try:
            # Test Vite client
            vite_client = requests.get(f"{self.base_url}/@vite/client", timeout=5)
            
            # Test main.jsx
            main_jsx = requests.get(f"{self.base_url}/src/main.jsx", timeout=5)
            
            return vite_client.status_code == 200 and main_jsx.status_code == 200
        except:
            return False

    def test_react_components(self):
        """Test if React components are accessible"""
        try:
            # Test App.jsx
            app_jsx = requests.get(f"{self.base_url}/src/App.jsx", timeout=5)
            
            # Test Layout component
            layout_jsx = requests.get(f"{self.base_url}/src/pages/Layout.jsx", timeout=5)
            
            # Test Home component
            home_jsx = requests.get(f"{self.base_url}/src/pages/Home.jsx", timeout=5)
            
            return (app_jsx.status_code == 200 and 
                   layout_jsx.status_code == 200 and 
                   home_jsx.status_code == 200)
        except:
            return False

    def test_css_assets(self):
        """Test if CSS assets are accessible"""
        try:
            # Test main CSS files
            app_css = requests.get(f"{self.base_url}/src/App.css", timeout=5)
            index_css = requests.get(f"{self.base_url}/src/index.css", timeout=5)
            
            return app_css.status_code == 200 and index_css.status_code == 200
        except:
            return False

    def test_dependencies(self):
        """Test if key dependencies are accessible"""
        try:
            # Test React
            react = requests.get(f"{self.base_url}/node_modules/.vite/deps/react.js", timeout=5)
            
            # Test Framer Motion
            framer = requests.get(f"{self.base_url}/node_modules/.vite/deps/framer-motion.js", timeout=5)
            
            # Test React Router
            router = requests.get(f"{self.base_url}/node_modules/.vite/deps/react-router-dom.js", timeout=5)
            
            return (react.status_code == 200 and 
                   framer.status_code == 200 and 
                   router.status_code == 200)
        except:
            return False

def main():
    print("🏠 RV Home Sol - Frontend Testing Suite")
    print("=" * 50)
    
    tester = FrontendTester()
    
    # Run all tests
    tests = [
        ("Development Server", tester.test_server_running),
        ("HTML Content", tester.test_html_content),
        ("Static Assets", tester.test_static_assets),
        ("React Components", tester.test_react_components),
        ("CSS Assets", tester.test_css_assets),
        ("Dependencies", tester.test_dependencies),
    ]
    
    for test_name, test_func in tests:
        tester.run_test(test_name, test_func)
    
    # Print results
    print(f"\n📊 Test Results:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    print(f"Success rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All tests passed! Frontend is ready for testing.")
        return 0
    else:
        print("❌ Some tests failed. Check the development server.")
        return 1

if __name__ == "__main__":
    sys.exit(main())