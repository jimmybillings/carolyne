class Api::HomeController < ApplicationController
	respond_to :json
	
	def index
		serialized_blocks =
      ActiveModel::ArraySerializer
               .new(Block.where(page: 'home'), each_serializer: BlockSerializer)

    render json: serialized_blocks
	end
end
