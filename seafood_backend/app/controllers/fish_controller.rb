class FishController < ApplicationController

    def index
        fishes = Fish.all 
        render json: fishes
    end
end
