
#include <vector>
#include <iostream>
#include "game_data.h"
#include "include/raylib.h"
#include "box2d/box2d.h"

class GameWorld
{
private:
  // Brick dimension
  const float w = 40.0f;
  const float h = 16.0f;

  // Physics body containers
  std::vector<b2Body *> game_bodies;
  std::vector<b2Body *> bricks;
  b2Body *walls[4];
  b2Body *ball;
  b2Body *bat;
  b2World *world;

  // Physics body gamedata
  GameData *ground_id;
  GameData *bat_id;
  GameData *ball_id;
  GameData *brick_id;

  inline void box2d_create_bricks();
  inline void draw_bricks();

public:
  GameWorld(b2World *w);
  void create_game_box();
  void create_ball();
  void create_bat();
  void apply_force_to_ball();
  void move_bat();
  void draw();
  ~GameWorld();
};
