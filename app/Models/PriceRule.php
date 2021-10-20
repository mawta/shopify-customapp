<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceRule extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'discount_id',
        'active_auto',
        'product_rule_type',
        'product_discount_rule_type',
        'tag_value',
        'product_rule_collection_id',
        'limit',
        "discount_type",
        "discount",
        'tag_value_discount',
        'product_rule_discount',
        'product_ids',
        'product_discount_ids',
        'product_rule_collection_id_discount',
    ];
}
