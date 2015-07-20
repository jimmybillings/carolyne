require 'spec_helper'

describe Api::UsersController do
  before(:each) do
    @user = create(:user, name: 'James Billings', age: 50)
  end

  describe '#index' do
    it 'should return a json array of users' do
      get :index
      result = JSON.parse(response.body)

      expect(result[0]['name']).to eq('James Billings')
    end
  end

  describe "#update" do
    it 'should successfully respond to edits' do
      put :update, id: @user.id, user: {
            id: @user.id,
            age: 50
          }

      expect(response).to be_success
    end

    it "should change the users's age" do
      @user.update_attribute(:age, 60)

      put :update, id: @user.id, user: {
            id: @user.id,
            age: 60
          }

      expect(@user.reload.age).to eq(60)
    end
  end
end
