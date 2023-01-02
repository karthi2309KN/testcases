import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'

describe('mocking axios requests', function () {
	
		
		beforeEach(function () {
			// import and pass your custom axios instance to this method
			moxios.install()
		})
		
		afterEach(function () {
			// import and pass your custom axios instance to this method
			moxios.uninstall()
		})
	
	
	test('just for a single spec', async()=> {
		moxios.withMock(function () {
			let onFulfilled = sinon.spy()
			axios.get('/users/12345').then(onFulfilled)
			
			 moxios.wait(function () {
				 let request = moxios.requests.mostRecent()
				 request.respondWith({
						status: 200,
						response: {
							id: 12345, firstName: 'Fred', lastName: 'Flintstone'
						}
					})
					.then(function () {
						equal(onFulfilled.called, true)
						
					})
			})
		})
	})
	

})