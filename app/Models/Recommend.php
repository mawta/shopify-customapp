<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recommend extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'active_auto',
        'product_rule_type',
        'product_recommend_rule_type',
        'tag_value',
        'product_rule_collection_id',
        'limit',
        'tag_value_recommend',
        'product_rule_recommend',
        'product_rule_id',
        'list_product_recommend',
        'product_rule_collection_id_recommend',
    ];
}
