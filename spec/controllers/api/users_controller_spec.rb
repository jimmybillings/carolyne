require 'spec_helper'

describe Api::UsersController do
  before(:each) do
    create(:user, name: 'James Billings')
  end

  describe '#index' do
    it 'should return a json array of users' do
      get :index
      result = JSON.parse(response.body)

      expect(result[0]['name']).to eq('James Billings')
    end
  end
end